fn main(correct_input: [Field; 5], user_input: pub [Field; 5]) -> pub bool {
    correct_input == user_input
}

#[test]
fn test_main() {
    // main(1, 2);
    // Uncomment to make test fail
    // main(1, 1);
}
