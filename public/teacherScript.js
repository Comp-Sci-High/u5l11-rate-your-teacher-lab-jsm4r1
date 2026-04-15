// Add an event listener to the form that upon submits creates a new teacher
const createForm = document.querySelector("form")

createForm.addEventListener("submit", async(e) => {
    e.preventDefault()

    const teacherSchema = new FormData(createForm)
    const reqBody = Object.fromEntries(teacherSchema)

    const response = await fetch("/add/teacher", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
    });
    window.location.href = "/"
})
// When the teacher is created redirect to the teachers page
