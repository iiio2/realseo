import { useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import * as v from 'valibot';
import { useRouter } from 'next/router';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
  Typography,
  Breadcrumbs,
  Link,
  InputAdornment,
  FormHelperText,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Valibot schema for form validation
const formSchema = v.object({
  firstName: v.pipe(
    v.string(),
    v.minLength(1, 'First name is required'),
    v.maxLength(50, 'First name is too long')
  ),
  lastName: v.pipe(
    v.string(),
    v.minLength(1, 'Last name is required'),
    v.maxLength(50, 'Last name is too long')
  ),
  address: v.pipe(
    v.string(),
    v.minLength(1, 'Address is required')
  ),
  dateOfBirth: v.pipe(
    v.string(),
    v.minLength(1, 'Date of birth is required')
  ),
  contactEmail: v.pipe(
    v.string(),
    v.email('Please enter a valid email address')
  ),
  contactCell: v.pipe(
    v.string(),
    v.minLength(1, 'Contact number is required')
  ),
  companyName: v.optional(v.string()),
  price: v.pipe(
    v.string(),
    v.minLength(1, 'Please select a package')
  ),
  comments: v.optional(v.string()),
});

type FormData = v.InferOutput<typeof formSchema>;

export default function New() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm<FormData>({
    resolver: valibotResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      dateOfBirth: '',
      contactEmail: '',
      contactCell: '',
      companyName: '',
      price: '',
      comments: '',
    },
  });

  const formValues = watch();

  const isFieldValid = (field: keyof FormData): boolean => {
    return touchedFields[field] === true && !errors[field] && formValues[field] !== '';
  };

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    // Here you would typically submit the form or navigate to next step
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link
          underline="hover"
          color="inherit"
          href="/"
          sx={{ fontSize: '14px', color: '#666' }}
        >
          Dashboard
        </Link>
        <Typography sx={{ fontSize: '14px', color: '#333', fontWeight: 500 }}>
          Clients
        </Typography>
      </Breadcrumbs>

      {/* Form Container */}
      <Box sx={{ backgroundColor: '#fff', borderRadius: '8px', p: 4 }}>
        {/* Form Title */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: '#333',
              mb: 1,
              fontSize: '20px',
            }}
          >
            Add New Client
          </Typography>
          <Box
            sx={{
              width: '60px',
              height: '3px',
              backgroundColor: '#86937F',
            }}
          />
        </Box>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {/* Row 1 */}
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography sx={{ fontSize: '14px', color: '#333', mb: 1, fontWeight: 500 }}>
                First Name:
              </Typography>
              <TextField
                {...register('firstName')}
                fullWidth
                placeholder="Xion"
                error={!!errors.firstName}
                slotProps={{
                  input: {
                    endAdornment: isFieldValid('firstName') ? (
                      <InputAdornment position="end">
                        <CheckCircleIcon sx={{ color: '#4caf50', fontSize: '20px' }} />
                      </InputAdornment>
                    ) : null,
                  }
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                    fontSize: '14px',
                    '& fieldset': {
                      borderColor: '#D0D0D0',
                    },
                    '&:hover fieldset': {
                      borderColor: '#A0A0A0',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: '#999',
                    opacity: 1,
                  },
                }}
              />
              {errors.firstName && (
                <FormHelperText error sx={{ ml: 0 }}>
                  {errors.firstName.message}
                </FormHelperText>
              )}
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography sx={{ fontSize: '14px', color: '#333', mb: 1, fontWeight: 500 }}>
                  Last Name:
              </Typography>
              <TextField
                  {...register('lastName')}
                  fullWidth
                  placeholder="Ashly"
                  error={!!errors.lastName}
                  slotProps={{
                    input: {
                      endAdornment: isFieldValid('lastName') ? (
                        <InputAdornment position="end">
                          <CheckCircleIcon sx={{ color: '#4caf50', fontSize: '20px' }} />
                        </InputAdornment>
                      ) : null,
                    }
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      fontSize: '14px',
                      '& fieldset': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#A0A0A0',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#999',
                      opacity: 1,
                    },
                  }}
              />
              {errors.lastName && (
                <FormHelperText error sx={{ ml: 0 }}>
                  {errors.lastName.message}
                </FormHelperText>
              )}
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography sx={{ fontSize: '14px', color: '#333', mb: 1, fontWeight: 500 }}>
                  Address:
              </Typography>
              <TextField
                  {...register('address')}
                  fullWidth
                  placeholder="Type your Address"
                  error={!!errors.address}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      fontSize: '14px',
                      '& fieldset': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#A0A0A0',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#999',
                      opacity: 1,
                    },
                  }}
              />
              {errors.address && (
                <FormHelperText error sx={{ ml: 0 }}>
                  {errors.address.message}
                </FormHelperText>
              )}
            </Grid>

              {/* Row 2 */}
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography sx={{ fontSize: '14px', color: '#333', mb: 1, fontWeight: 500 }}>
                  Date of Birth:
              </Typography>
              <TextField
                  {...register('dateOfBirth')}
                  fullWidth
                  type="date"
                  error={!!errors.dateOfBirth}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      fontSize: '14px',
                      '& fieldset': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#A0A0A0',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                      },
                    },
                  }}
              />
              {errors.dateOfBirth && (
                <FormHelperText error sx={{ ml: 0 }}>
                  {errors.dateOfBirth.message}
                </FormHelperText>
              )}
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography sx={{ fontSize: '14px', color: '#333', mb: 1, fontWeight: 500 }}>
                  Contact Email:
              </Typography>
              <TextField
                  {...register('contactEmail')}
                  fullWidth
                  type="email"
                  placeholder="Type your Email"
                  error={!!errors.contactEmail}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      fontSize: '14px',
                      '& fieldset': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#A0A0A0',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#999',
                      opacity: 1,
                    },
                  }}
              />
              {errors.contactEmail && (
                <FormHelperText error sx={{ ml: 0 }}>
                  {errors.contactEmail.message}
                </FormHelperText>
              )}
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography sx={{ fontSize: '14px', color: '#333', mb: 1, fontWeight: 500 }}>
                  Contact Cell Number:
              </Typography>
              <TextField
                  {...register('contactCell')}
                  fullWidth
                  placeholder="Type your Cell No"
                  error={!!errors.contactCell}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      fontSize: '14px',
                      '& fieldset': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#A0A0A0',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#999',
                      opacity: 1,
                    },
                  }}
              />
              {errors.contactCell && (
                <FormHelperText error sx={{ ml: 0 }}>
                  {errors.contactCell.message}
                </FormHelperText>
              )}
            </Grid>

            {/* Row 3 */}
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography sx={{ fontSize: '14px', color: '#333', mb: 1, fontWeight: 500 }}>
                  Company Name
              </Typography>
              <TextField
                  {...register('companyName')}
                  fullWidth
                  placeholder="Type Here"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      fontSize: '14px',
                      '& fieldset': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#A0A0A0',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#999',
                      opacity: 1,
                    },
                  }}
                />
              </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography sx={{ fontSize: '14px', color: '#333', mb: 1, fontWeight: 500 }}>
                  Price
                </Typography>
              <FormControl fullWidth error={!!errors.price}>
                <Select
                    {...register('price')}
                    displayEmpty
                    defaultValue=""
                    sx={{
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      fontSize: '14px',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#A0A0A0',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1976d2',
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      <span style={{ color: '#999' }}>Please Select your Packages</span>
                    </MenuItem>
                    <MenuItem value="basic">Basic Package - $500</MenuItem>
                    <MenuItem value="standard">Standard Package - $1000</MenuItem>
                    <MenuItem value="premium">Premium Package - $2000</MenuItem>
                    <MenuItem value="enterprise">Enterprise Package - $5000</MenuItem>
                </Select>
                {errors.price && (
                  <FormHelperText error sx={{ ml: 0 }}>
                    {errors.price.message}
                  </FormHelperText>
                )}
              </FormControl>
              </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography sx={{ fontSize: '14px', color: '#333', mb: 1, fontWeight: 500 }}>
                  Comments
              </Typography>
              <TextField
                  {...register('comments')}
                  fullWidth
                  placeholder="You'll get"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      fontSize: '14px',
                      '& fieldset': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#A0A0A0',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#999',
                      opacity: 1,
                    },
                  }}
                />
              </Grid>
          </Grid>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
            <Button
                variant="outlined"
                onClick={handleBack}
                type="button"
                sx={{
                  borderColor: '#D0D0D0',
                  color: '#333',
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  fontSize: '14px',
                  fontWeight: 500,
                  borderRadius: '6px',
                  '&:hover': {
                    borderColor: '#A0A0A0',
                    backgroundColor: '#F9F9F9',
                  },
                }}
            >
              BACK
            </Button>
            <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: '#86937F',
                  color: '#fff',
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  fontSize: '14px',
                  fontWeight: 500,
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: '#6f7a68',
                  },
                }}
            >
              NEXT
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
