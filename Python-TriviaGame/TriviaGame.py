correct = 0
incorrect = 0
ans1 = 0
ans2 = 0
ans3 = 0
ans4 = 0

def linebreak():
    print ('\n')

while correct == 0 and incorrect == 0:
    print ("What is the answer to Question 1? Enter A, B or C")
    print ("A. CORRECT ANSWER")
    print ("B. Incorrect answer 1")
    print ("C. Incorrect answer 2")
    #This loop gives a user the option to restart the survey
    #Entering Y will set the stored values for the "correct" and "incorrect" variables, which meets the condition to start the quiz

    while ans1 != "A" or ans1 != "a" or ans1 != "B" or ans1 != "b" or ans1 != "C" or ans1 != "c":
    #The question will be repeated if the user enters an invalid value
    #If the value is not equal to A B or C then the program will require the user to re-enter a value until a valid answer is entered

        ans1 = input ("Answer: ")

        if ans1 == "A" or ans1 == "a":
                correct = correct + 1
                print (ans1, "is correct!")
                linebreak()
                break

        elif ans1 == "B" or ans1 == "b" or ans1 == "C" or ans1 == "c":
                incorrect = incorrect + 1
                print (ans1, "is not the correct answer.")
                linebreak()
                break

        else:
                print (ans1, "is not a valid entry")
                continue

    print ("What is the answer to Question 1? Enter A, B or C")
    print ("A. Incorrect answer 1")
    print ("B. CORRECT ANSWER")
    print ("C. Incorrect answer 2")

    while ans2 != "A" or ans2 != "a" or ans2 != "B" or ans2 != "b" or ans2 != "C" or ans2 != "c":

        ans2 = input ("Answer: ")

        if ans2 == "B" or ans2 == "b":
                correct = correct + 1
                print (ans2, "is correct!")
                linebreak()
                break

        elif ans2 == "A" or ans2 == "a" or ans2 == "C" or ans2 == "c":
                incorrect = incorrect + 1
                print (ans2, "is not the correct answer.")
                linebreak()
                break

        else:
                print (ans2, "is not a valid entry")
                continue
            
    print ("What is the answer to Question 1? Enter A, B or C")
    print ("A. CORRECT ANSWER")
    print ("B. Incorrect answer 1")
    print ("C. Incorrect answer 2")

    while ans3 != "A" or ans3 != "a" or ans3 != "B" or ans3 != "b" or ans3 != "C" or ans3 != "c":

        ans3 = input ("Answer: ")

        if ans3 == "A" or ans3 == "a":
                correct = correct + 1
                print (ans3, "is correct!")
                linebreak()
                break

        elif ans3 == "B" or ans3 == "b" or ans3 == "C" or ans3 == "c":
                incorrect = incorrect + 1
                print (ans3, "is not the correct answer.")
                linebreak()
                break

        else:
                print (ans3, "is not a valid entry")
                continue

    print ("What is the answer to Question 1? Enter A, B or C")
    print ("A. Incorrect answer 1")
    print ("B. Incorrect answer 2")
    print ("C. CORRECT ANSWER")

    while ans4 != "A" or ans4 != "a" or ans4 != "B" or ans4 != "b" or ans4 != "C" or ans4 != "c":

        ans4 = input ("Answer: ")

        if ans4 == "C" or ans4 == "c":
                correct = correct + 1
                print (ans4, "is correct!")
                linebreak()
                break

        elif ans4 == "A" or ans4 == "a" or ans4 == "B" or ans4 == "b":
                incorrect = incorrect + 1
                print (ans4, "is not the correct answer.")
                linebreak()
                break

        else:
                print (ans4, "is not a valid entry")
                continue

    print ("You got", correct, "of", correct + incorrect, "questions correct.")
    linebreak()
    #Provides a total score

    rerun = input ("Would you like to try again? Enter Y or N to continue: ")
    if rerun == "Y" or rerun == "y":
        incorrect = 0
        correct = 0
        print ("Welcome back!")
        linebreak()

    elif rerun == "N" or rerun == "n":
        linebreak()
        print ("Thanks for playing!")
        break

    else:
        print (rerun, "is not a valid entry")
        continue