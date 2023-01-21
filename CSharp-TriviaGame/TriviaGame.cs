using System;

namespace TriviaProject
{
    internal class Program
    {
        static void Main(string[] args)
        {

            var q1 = "x";
            var q1Corrected = "x";
            var q2 = "x";
            var q2Corrected = "x";
            var q3 = "x";
            var q3Corrected = "x";
            var q4 = "x";
            var q4Corrected = "x";
            double totalCorrect = 0.0;
            double totalIncorrect = 0.0;
            double finalScore = 0.0;
            var tryAgain = "Y";
            var tryAgainCorrected = "Y";

            while (tryAgainCorrected == "Y")
            {
                Console.WriteLine("Question 1: What is the answer?");
                Console.WriteLine("A. Correct Answer");
                Console.WriteLine("B. Incorrect Answer");
                Console.WriteLine("C. Incorrect Answer");

                while (q1Corrected != "A" && q1Corrected != "B" && q1Corrected != "C")
                {
                    q1 = Console.ReadLine();
                    q1Corrected = q1.ToUpper();

                    switch (q1Corrected)
                    {
                        case "A":
                            Console.WriteLine("{0} is the correct Answer!", q1Corrected);
                            ++totalCorrect;
                            break;

                        case "B":
                            Console.WriteLine("{0} is not correct.", q1Corrected);
                            ++totalIncorrect;
                            break;

                        case "C":
                            Console.WriteLine("{0} is not correct.", q1Corrected);
                            ++totalIncorrect;
                            break;

                        default:
                            Console.WriteLine("{0} is not a valid entry. A, B or C.", q1Corrected);
                            continue;
                    }
                }

                Console.WriteLine("Question 2: What is the answer?");
                Console.WriteLine("A. Incorrect Answer");
                Console.WriteLine("B. Correct Answer");
                Console.WriteLine("C. Incorrect Answer");

                while (q2Corrected != "A" && q2Corrected != "B" && q2Corrected != "C")
                {
                    q2 = Console.ReadLine();
                    q2Corrected = q2.ToUpper();

                    switch (q2Corrected)
                    {
                        case "A":
                            Console.WriteLine("{0} is not correct.", q2Corrected);
                            ++totalIncorrect;
                            break;

                        case "B":
                            Console.WriteLine("{0} is the correct Answer!", q2Corrected);
                            ++totalCorrect;
                            break;

                        case "C":
                            Console.WriteLine("{0} is not correct.", q2Corrected);
                            ++totalIncorrect;
                            break;

                        default:
                            Console.WriteLine("{0} is not a valid entry. A, B or C.", q2Corrected);
                            continue;
                    }
                }

                Console.WriteLine("Question 3: What is the answer?");
                Console.WriteLine("A. Incorrect Answer");
                Console.WriteLine("B. Incorrect Answer");
                Console.WriteLine("C. Correct Answer");

                while (q3Corrected != "A" && q3Corrected != "B" && q3Corrected != "C")
                {
                    q3 = Console.ReadLine();
                    q3Corrected = q3.ToUpper();

                    switch (q3Corrected)
                    {
                        case "A":
                            Console.WriteLine("{0} is not correct.", q3Corrected);
                            ++totalIncorrect;
                            break;

                        case "B":
                            Console.WriteLine("{0} is not correct.", q3Corrected);
                            ++totalIncorrect;
                            break;

                        case "C":
                            Console.WriteLine("{0} is the correct Answer!", q3Corrected);
                            ++totalCorrect;
                            break;

                        default:
                            Console.WriteLine("{0} is not a valid entry. A, B or C.", q3Corrected);
                            continue;
                    }
                }

                Console.WriteLine("Question 4: What is the answer?");
                Console.WriteLine("A. Incorrect Answer");
                Console.WriteLine("B. Incorrect Answer");
                Console.WriteLine("C. Correct Answer");

                while (q4Corrected != "A" && q4Corrected != "B" && q4Corrected != "C")
                {
                    q4 = Console.ReadLine();
                    q4Corrected = q4.ToUpper();

                    switch (q4Corrected)
                    {
                        case "A":
                            Console.WriteLine("{0} is not correct.", q4Corrected);
                            ++totalIncorrect;
                            break;

                        case "B":
                            Console.WriteLine("{0} is not correct.", q4Corrected);
                            ++totalIncorrect;
                            break;

                        case "C":
                            Console.WriteLine("{0} is the correct Answer!", q4Corrected);
                            ++totalCorrect;
                            break;

                        default:
                            Console.WriteLine("{0} is not a valid entry. A, B or C.", q4Corrected);
                            continue;
                    }
                }

                finalScore = (totalCorrect / (totalCorrect + totalIncorrect) * 100); 
                Console.WriteLine("You got {0} correct and {1} incorrect. Your final score is: {2}%.", totalCorrect, totalIncorrect, finalScore);
                Console.WriteLine("Would you like to try again? Enter Y to continue. Otherwise, enter any other value to Exit");

                tryAgain = Console.ReadLine();
                tryAgainCorrected = tryAgain.ToUpper();

                switch (tryAgainCorrected)
                {
                    case "Y":
                        Console.WriteLine("Welcome Back!");
                        q1 = "x";
                        q1Corrected = "x";
                        q2 = "x";
                        q2Corrected = "x";
                        q3 = "x";
                        q3Corrected = "x";
                        q4 = "x";
                        q4Corrected = "x";
                        totalCorrect = 0;
                        totalIncorrect = 0;
                        break;

                    default:
                        Console.WriteLine("Good bye!");
                        break;
                }
            }
        }
    }
} 