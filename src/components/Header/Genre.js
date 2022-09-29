import { Box } from '@mui/system';
import React from 'react'

export default function () {
    const {id}= useParams();
    const [movieDetail, setMovieDetail] = React.useState({});
   
    useEffect(() => {
      if (props.movieId) {
        setLoading(true);
        getMovieDetailById(props?.movieId).then((res) => {
          setLoading(false);
          setMovieDetail(res?.movie);
        });
      }
    }, [props?.movieId]);
  return (
    <div>
        <Box
                    display={"flex"}
                    gap={2}
                    flexWrap={"wrap"}
                    alignItems={"center"}
                  >
                    {movieDetail?.genres?.map((item) => (
                      <Chip
                        key={item}
                        variant={"outlined"}
                        label={item}
                      />
                    ))}
                  </Box>
    </div>
  )
}
