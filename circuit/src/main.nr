// Constants for the game
global WORD_LENGTH = 5;

struct LetterStatus {
    is_correct: bool,
    is_present: bool,
}

// Main Noirdle circuit to verify a valid guess
fn main(target_word: str<WORD_LENGTH>, guess: str<WORD_LENGTH>) -> pub [LetterStatus; WORD_LENGTH] {
    // Shadowing target_word and guess
    let target_word = target_word.as_bytes();
    let guess = guess.as_bytes();

    // Assert that the guess and target words are the proper length
    assert(target_word.len() == WORD_LENGTH);
    assert(guess.len() == WORD_LENGTH);

    // Convert letter statuses to verifiable results
    let mut letter_statuses: [LetterStatus; WORD_LENGTH] =
        [LetterStatus { is_correct: false, is_present: false }; WORD_LENGTH];

    // First pass: mark exact matches
    for i in 0..WORD_LENGTH {
        letter_statuses[i].is_correct = (target_word[i] == guess[i]);
    }

    // Second pass: mark present letters
    for i in 0..WORD_LENGTH {
        // If the letter is not already marked as correct
        if !letter_statuses[i].is_correct {
            // Check if the letter is present in the target word
            for j in 0..WORD_LENGTH {
                // Ensure current index is not equal to target index
                if i != j {
                    // If the letters match
                    if target_word[j] == guess[i] {
                        letter_statuses[i].is_present = true;
                    }
                }
            }
        }
    }

    letter_statuses
}

#[test]
fn test_passing_same_word() {
    let target_word = "APPLE";
    let guess = "APPLE";
    let letter_statuses = main(target_word, guess);

    assert(letter_statuses[0].is_correct);
    assert(letter_statuses[1].is_correct);
    assert(letter_statuses[2].is_correct);
    assert(letter_statuses[3].is_correct);
    assert(letter_statuses[4].is_correct);

    assert(!letter_statuses[0].is_present);
    assert(!letter_statuses[1].is_present);
    assert(!letter_statuses[2].is_present);
    assert(!letter_statuses[3].is_present);
    assert(!letter_statuses[4].is_present);
}

#[test]
fn test_passing_different_word() {
    let target_word = "APPLE";
    let guess = "MANGO";
    let letter_statuses = main(target_word, guess);

    assert(!letter_statuses[0].is_correct);
    assert(!letter_statuses[1].is_correct);
    assert(!letter_statuses[2].is_correct);
    assert(!letter_statuses[3].is_correct);
    assert(!letter_statuses[4].is_correct);

    assert(!letter_statuses[0].is_present);
    assert(letter_statuses[1].is_present);
    assert(!letter_statuses[2].is_present);
    assert(!letter_statuses[3].is_present);
    assert(!letter_statuses[4].is_present);
}

#[test(should_fail)]
fn test_failing_different_word() {
    let target_word = "APPLE";
    let guess = "GUAVA";
    let letter_statuses = main(target_word, guess);

    assert(!letter_statuses[0].is_correct);
    assert(!letter_statuses[1].is_correct);
    assert(!letter_statuses[2].is_correct);
    assert(!letter_statuses[3].is_correct);
    assert(!letter_statuses[4].is_correct);

    assert(!letter_statuses[0].is_present);
    assert(!letter_statuses[1].is_present);
    assert(!letter_statuses[2].is_present);
    assert(!letter_statuses[3].is_present);
    assert(!letter_statuses[4].is_present);
}

