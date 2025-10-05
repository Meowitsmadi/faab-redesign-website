import { useState, useContext } from "react";
import ShopContext from "../ShopContext";

const ArchiveDropdown = ({ setArchiveFilter }) => {
    const { posts } = useContext(ShopContext);
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const archive = {}

    if (posts && posts.length > 0) {
        posts.forEach((post) => {
            const date = new Date(post.published);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            if (!archive[year]) archive[year] = {};
            if (!archive[year][month]) archive[year][month] = [];
            archive[year][month].push(post);
        });
    }
    const years = Object.keys(archive)
    const months = selectedYear ? Object.keys(archive[selectedYear]) : []

    const handleYearChange = (year) => {
        setSelectedYear(year);
        setSelectedMonth("");
        setArchiveFilter({ year: year, month: "" });
    };

    const handleMonthChange = (month) => {
        setSelectedMonth(month);
        setArchiveFilter({ year: Number(selectedYear), month: Number(month) });
    };

    return (
        <div>
            <select
                value={selectedYear}
                onChange={(e) => {handleYearChange(e.target.value)}}
            >
                <option value="">Select Year</option>
                {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
                ))}
            </select>

            {selectedYear && (
                <select
                value={selectedMonth}
                onChange={(e) => {handleMonthChange(e.target.value)}}
                >
                    <option value="">Select Month</option>
                    {months.map((month) => (
                        <option key={month} value={month}>
                        {month}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default ArchiveDropdown;