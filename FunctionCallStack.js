function LevelTwo() {
    console.log("Level Two");
}
function LevelOne() {
    LevelTwo()
}
function main() {
    LevelOne()
}
main()