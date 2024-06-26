"use client";

import { IFilters } from "@/app/catalog/page";

export interface ISortProps {
  filters: IFilters;
  setFilters: (filters: IFilters) => void;
}

export interface ISortField {
  label: string;
  field: "price" | "square" | "creationDate";
}
const sortFields: ISortField[] = [
  { label: "По площади", field: "square" },
  { label: "По цене", field: "price" },
  { label: "По новизне", field: "creationDate" },
];

export const Sort = ({ filters, setFilters }: ISortProps) => {
  const handleSort = (field: "price" | "square" | "creationDate") => {
    if (filters.sortField !== field) {
      setFilters({
        ...filters,
        sortField: field,
        sortOrder: "DESC",
      });
    } else if (filters.sortOrder === "DESC") {
      setFilters({
        ...filters,
        sortOrder: "ASC",
      });
    } else {
      setFilters({
        ...filters,
        sortField: undefined,
        sortOrder: undefined,
      });
    }
  };

  return (
    <div className="sort">
      <p>Сортировать</p>
      <div className="sortContainer">
        {sortFields.map(({ label, field }) => (
          <h5
            key={field}
            style={{ textWrap: "nowrap", cursor: "pointer" }}
            className={"clickable"}
            onClick={() => handleSort(field)}
          >
            {label}
            <img
              src="/sortIcon.png"
              alt="sort"
              style={{ paddingLeft: "4px" }}
              className={`sortIcon ${
                filters.sortField === field
                  ? filters.sortOrder === "DESC"
                    ? "rotate"
                    : ""
                  : "hidden"
              }`}
            />
          </h5>
        ))}
      </div>
      <style jsx>{`
        .sortIcon {
          transition: transform 0.3s;
        }
        .sortIcon.rotate {
          transform: rotate(180deg);
        }
        .sortIcon.hidden {
          display: none;
        }
      `}</style>
    </div>
  );
};
