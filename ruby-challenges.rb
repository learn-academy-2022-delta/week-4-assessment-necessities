# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

#creator is nice so we are nice 

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# i will declare a method call even_or_odd
# it wil take one integer input; called input_num
#it will return a string stateing even or odd

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'


def even_or_odd input_num 
    if input_num % 2 == 0
        p 'even'
    elsif input_num % 2 == 1
        p 'odd'
    else 
        p 'unknown'
    end
end

even_or_odd num1 
even_or_odd num2
even_or_odd num3









# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# ill declare a function named remove_vowels, it will take one input named input string, then i will use a method to remove all the vowels


def remove_vowels input_string

    return_array = input_string.delete "AEIOUaeiou"
    

end

p remove_vowels album2





# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def checker input_string
    if input_string.downcase == input_string.downcase.reverse 
        p "#{input_string} is a palindrome"
    else 
        p "#{input_string} is not a palindrome"
    
    end
end

checker palindrome_tester1