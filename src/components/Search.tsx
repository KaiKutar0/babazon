import { Autocomplete, Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Search({ data }: { data: { name: string; id: string }[] }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: 1 }}>
      <Autocomplete
        sx={{ width: 720 }}
        aria-placeholder="Type to search..."
        options={data.map((i) => ({ label: i.name, id: i.id }))}
        renderInput={(params) => <TextField {...params} />}
        //value={}
        onChange={(_, i) => {
          i && navigate(`/details/${i.id}`);
        }}
      />
    </Box>
  );
}

export default Search;
