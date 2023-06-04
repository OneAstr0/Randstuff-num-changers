const numbers = [1, 100, 1233, 544, 11]

$("#button.number").off()

const el = document.querySelector("#number")

let i = 0

$("#button.number").on("click", () => {
    const number = numbers[i]
        ? String(numbers[i++])
        : String(Math.round(Math.random() * 100))
    const caption = $("#caption")
    const container = $("#number")

    caption.text(caption.data("txt"))
    container.attr("class", "single")

    let html = '<span class="new">'
    for (let a = 0; a < number.length; a++) {
        html += `<span>${number.charAt(a)}</span>`
    }

    html += "</span>"

    container.find(".new").attr("class", "cur")
    container.find(".cur").remove()
    container.append(html)

    let b = 1
    container.find(".new span").each(function () {
        $(this)
            .delay(parseInt(200 / number.length) * b++)
            .animate({bottom: 0}, 200, "easeOutQuint")
    })
})