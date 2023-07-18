"use client"

import React, { useEffect, useState } from 'react'

const Home = () => {
  const [ showSearchBox, setShowSearchBox] = useState(false)
  const [ data , setData ] =useState<object | any>([]); 
  const [search, setSearch] = useState("");
  const [ isAscendingOrder, setIsAscendingOrder]= useState<any>(false)

  const fetchData = async() => {
      const response = await fetch("https://dummyjson.com/products")
      const actualRes = await response.json()
      setData(actualRes.products)
      console.log(data, "actualRes")
  }

  useEffect(() => {
    fetchData()
  },[])



  // SORT DATA BY NAME
  const handleSortFunctionTablebyName = () => {
    setData((prevState: any) => {
      const sortedData = [...prevState];
      if (isAscendingOrder) {
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        sortedData.sort((a, b) => b.title.localeCompare(a.title));
      }
      setIsAscendingOrder(!isAscendingOrder);
      return sortedData;
    });
  };

  // SORT DATA BY CONTACT
  const handleSortFunctionTablebyContact = () => {
    setData((prevState: any) => {
      const sortedData = [...prevState];
      if (isAscendingOrder) {
        sortedData.sort((a, b) => a.email.localeCompare(b.email));
      } else {
        sortedData.sort((a, b) => b.email.localeCompare(a.email));
      }
      setIsAscendingOrder(!isAscendingOrder);
      return sortedData;
    });
  }
  


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const searchTerm = e.target.value;
    setSearch(searchTerm);

    if(searchTerm === ''){
      setData(data)
    }else{
         setData((prevState: any[]) => {
      return prevState.filter((elem: any) => {
        const titleMatch = elem.title.toLowerCase().includes(searchTerm.toLowerCase());
        const descriptionMatch = elem.description.toLowerCase().includes(searchTerm.toLowerCase());
        return titleMatch || descriptionMatch;
      });
    });
    }

 
  };


  return (
    <>
              <table className="client-screen-table" >
          <thead style={{ backgroundColor: "#F5F5F5" }}>
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <th
                style={{
                  height: "56px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "0px 6px",
                }}
              >
                {" "}
                Timestamp

                <div className="search-box-tab-1"  style={{visibility: showSearchBox ? "visible" : "hidden"}}>
                <div className="search-box-table">
        <input className="input-field" placeholder="Search..." onChange={handleChange}/>
    
        </div>
    
          </div>

                <svg     onClick={() =>  setShowSearchBox(!showSearchBox)}   style={{position:"relative", left:"-2%"}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#1D2759" className="bi bi-search  svg-input-search" viewBox="0 0 16 16">
             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
             </svg>

         
                <span style={{ display: "flex", flexDirection: "column" }}   onClick={handleSortFunctionTablebyName}>
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.40962 0.585166C5.21057 0.300808 4.78943 0.300807 4.59038 0.585166L0.300712 6.71327C0.0687404 7.04466 0.305816 7.5 0.710328 7.5H9.28967C9.69418 7.5 9.93126 7.04466 9.69929 6.71327L5.40962 0.585166Z"
                      fill="#333333"
                    />
                  </svg>

                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.40962 7.41483C5.21057 7.69919 4.78943 7.69919 4.59038 7.41483L0.300712 1.28673C0.0687404 0.955343 0.305816 0.5 0.710328 0.5H9.28967C9.69418 0.5 9.93126 0.955342 9.69929 1.28673L5.40962 7.41483Z"
                      fill="#D8D3D3"
                    />
                  </svg>
                </span>
              </th>

              <th
              onClick={handleSortFunctionTablebyName}
                style={{
                  height: "56px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0px 6px",

                }}
              >


                Purchase Id
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={handleSortFunctionTablebyContact}
                  >
                    <path
                      d="M5.40962 0.585166C5.21057 0.300808 4.78943 0.300807 4.59038 0.585166L0.300712 6.71327C0.0687404 7.04466 0.305816 7.5 0.710328 7.5H9.28967C9.69418 7.5 9.93126 7.04466 9.69929 6.71327L5.40962 0.585166Z"
                      fill="#333333"
                    />
                  </svg>

                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.40962 7.41483C5.21057 7.69919 4.78943 7.69919 4.59038 7.41483L0.300712 1.28673C0.0687404 0.955343 0.305816 0.5 0.710328 0.5H9.28967C9.69418 0.5 9.93126 0.955342 9.69929 1.28673L5.40962 7.41483Z"
                      fill="#D8D3D3"
                    />
                  </svg>
                </span>
              </th>
              <th
                style={{
                  height: "56px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "0px 6px",
                }}
              >
                Mail
                <span style={{ display: "flex", flexDirection: "column" }}>
              

                </span>
              </th>
              <th
                style={{
                  height: "56px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  transform:"translateX(-5%)"
                }}
              >
               Name
                
              </th>
              <th
                style={{
                  height: "56px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "0px 6px",
                  transform:"translateX(-5%)"

                }}
              >
                        <span style={{ display: "flex", flexDirection: "column" }}>
                

                </span>
                Source
              </th>
              <th
                style={{
                  height: "56px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "0px 6px",
                  transform:"translateX(-5%)"

                }}
              >
                        <span style={{ display: "flex", flexDirection: "column" }}>
                
                </span>
                Status
              </th>
              <th
                style={{
                  height: "56px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "0px 6px",
                  transform:"translateX(-5%)"

                }}
              >
                Select
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((client: any, index: any) => (
              <tr
                style={{
                  height: "69px",
                  background: "#FFFFFF",
                  boxShadow: "0px -1px 0px #E0E7ED",
                }}
                key={index}
              >
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingLeft: ".5rem"
                  }}
                >
                  <span
                    style={{
                      color: "#1D2759",
                      fontWeight: "400",
                      fontSize: "12px",
                    }}
                  >
                    {" "}
               {client.title}
                  </span>
                  <span>
                  {client.description.length > 20
                ? client.description.slice(0, 20) + "..."
                : client.description}

                  </span>
                </td>
                <td>
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent:"center",
                      textAlign:"left"
                    }}
                  >
                    <span> {client.category}</span>
                    <span> {client.discountPercentage} %</span>
                  </span>
                </td>
                <td>{client.brand}</td>
                <td>$ {client.price}  </td>
                <td>$ {client.price}  </td>
                <td>$ {client.price}  </td>

                <span className="last-column-item" 
                    style={{
                      transform:"translateX(-230%)"
                    }}
                >
                  <td
                    className="last-column"
                    style={{
                      background:"#F8FFEF",
                    }}
                  >
                   
                      Open
                  </td>
                </span>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}

export default Home
