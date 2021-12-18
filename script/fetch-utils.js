const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUxMDExOCwiZXhwIjoxOTU1MDg2MTE4fQ.n_1ON3spG8iTfcVhhr5SVF_YVwK9zTLL2ChEvI1BSmY';

const SUPABASE_URL = 'https://fyyidslbegjzyojgpivl.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getRankCard(){
    const response = await client
        .from(`rank-card`)
        .select();

    return checkError(response);
}

function checkError({ data, error }){
    return error ? console.log(error) : data;
}