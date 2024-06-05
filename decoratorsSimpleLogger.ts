export default function SimpleLogger(target: Function) {
    console.log("Class created: " + target.name)
}